from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DesmatamentoViewSet

router = DefaultRouter()
router.register(r'desmatamento', DesmatamentoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
