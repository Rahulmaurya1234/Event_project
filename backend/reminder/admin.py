from django.contrib import admin
from .models import Reminder

class ReminderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'title', 'description', 'remind_at', 'created_at')
    list_filter = ('user', 'remind_at', 'created_at')
    search_fields = ('title', 'description', 'user__username')

    class Media:
        css = {
            'all': ('admin/css/custom_admin.css',)
        }

admin.site.register(Reminder, ReminderAdmin)
