from ...models import Category
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Populate for category database with sample data'

    def handle(self, *args, **options):

        Category.objects.all().delete()  # Clear existing data
        
        categories = [
              "Sports",
              "Technology",
              "Science",
              "Art",
              "Food",
        ]
        for name in categories:
            Category.objects.create(name=name)
        self.stdout.write(self.style.SUCCESS('Successfully populated the database with sample categories.'))