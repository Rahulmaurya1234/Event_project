from celery import shared_task
from django.core.mail import send_mail
from .models import Reminder
from django.utils import timezone


@shared_task
def send_reminder_email(reminder_id):
    reminder = Reminder.objects.get(id=reminder_id)
    send_mail(
        subject=f"Reminder: {reminder.title}",
        message=f"Hey! Don't forget: {reminder.description}",
        from_email="your@gmail.com",
        recipient_list=[reminder.user.email],
    )

    print("Email sent!")
