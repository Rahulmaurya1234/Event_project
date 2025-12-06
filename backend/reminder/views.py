from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Reminder
from .serializers import Reminderserializers, UserSerializer,RegisterSerializer



class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]




class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):

        print("LOGIN REQUEST DATA → ", request.data)

        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})

        if not serializer.is_valid():
            print("SERIALIZER ERRORS → ", serializer.errors)

        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key,
            'user': UserSerializer(user).data
        })





class ReminderViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Reminder.objects.all()
    serializer_class = Reminderserializers

    def get_queryset(self):
        return Reminder.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

