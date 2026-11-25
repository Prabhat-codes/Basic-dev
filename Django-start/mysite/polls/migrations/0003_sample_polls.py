from django.db import migrations
from django.utils import timezone

SAMPLES = {
    "Which language do you enjoy most?": ["Python", "JavaScript", "C++"],
    "Tea or coffee?": ["Tea", "Coffee"],
}


def add_samples(apps, schema_editor):
    Question = apps.get_model("polls", "Question")
    Choice = apps.get_model("polls", "Choice")
    if Question.objects.exists():
        return
    for text, choices in SAMPLES.items():
        question = Question.objects.create(question_text=text, date=timezone.now())
        for choice in choices:
            Choice.objects.create(question=question, choice_text=choice)


class Migration(migrations.Migration):
    dependencies = [("polls", "0002_rename_question_question_question_text")]
    operations = [migrations.RunPython(add_samples, migrations.RunPython.noop)]
