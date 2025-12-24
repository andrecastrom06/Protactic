from django.urls import path
from .views import LoginView
from .views import LoginView, NavigationView

urlpatterns = [
    path('', LoginView.as_view(), name='login'),
    path("navigation/", NavigationView.as_view(), name="navigation"),
]