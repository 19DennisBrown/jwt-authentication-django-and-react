from rest_framework.serializers import ModelSerializer
from base.models import *




class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class ProfileSerializer(ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Profile
        fields = ('user', 'first_name', 'last_name', 'email')