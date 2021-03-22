from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    TaskerAvailabilityViewSet,
    TaskerSkillViewSet,
    TimeslotViewSet,
    BusinessPhotoViewSet,
)

router = DefaultRouter()
router.register("businessphoto", BusinessPhotoViewSet)
router.register("timeslot", TimeslotViewSet)
router.register("taskerskill", TaskerSkillViewSet)
router.register("taskeravailability", TaskerAvailabilityViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
