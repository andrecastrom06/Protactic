from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Tipo de Usuário', {'fields': ('user_type',)}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Tipo de Usuário', {'fields': ('user_type',)}),
    )

    list_display = ('username', 'email', 'user_type', 'is_staff', 'is_active')