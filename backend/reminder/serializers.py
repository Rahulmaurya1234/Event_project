# core/serializers.py
from rest_framework import serializers
from reminder.models import Reminder
from .models import Reminder
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', '')
        )
        return user




class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)


    class Meta:
      model = User
      fields = ['id', 'username', 'email', 'password']


    def create(self, validated_data):
      user = User.objects.create_user(
           username=validated_data['username'],
           email=validated_data.get('email', ''),
           password=validated_data['password']
      )
      return user





class Reminderserializers(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = ['id', 'user', 'title', 'description', 'remind_at', 'created_at', 'updated_at']
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']




