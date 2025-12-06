from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReminderViewSet, RegisterAPIView, CustomAuthToken

router = DefaultRouter()
router.register('reminders', ReminderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', CustomAuthToken.as_view(), name='login'),
]

