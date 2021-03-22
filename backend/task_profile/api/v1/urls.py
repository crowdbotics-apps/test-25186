from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    TaskerProfileViewSet,
    InviteCodeViewSet,
    CustomerProfileViewSet,
    NotificationViewSet,
)

router = DefaultRouter()
router.register("notification", NotificationViewSet)
router.register("taskerprofile", TaskerProfileViewSet)
router.register("invitecode", InviteCodeViewSet)
router.register("customerprofile", CustomerProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
