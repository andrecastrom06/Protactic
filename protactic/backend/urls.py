from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoginView, NavigationView, ClubeViewSet, JogadorViewSet

router = DefaultRouter()
router.register(r'clubes', ClubeViewSet)
router.register(r'jogadores', JogadorViewSet)

urlpatterns = [
    path('', LoginView.as_view(), name='login'),
    path("navigation/", NavigationView.as_view(), name="navigation"),
    path('', include(router.urls)),
]