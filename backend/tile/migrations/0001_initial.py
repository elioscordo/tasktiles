# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-06-25 10:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('type', models.CharField(max_length=200, verbose_name='Type')),
                ('body', models.TextField(verbose_name='Body')),
                ('order', models.SmallIntegerField(default=0)),
            ],
            options={
                'ordering': ('order',),
            },
        ),
        migrations.CreateModel(
            name='Tile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('launch', models.DateField(verbose_name='Launch')),
                ('native_name', models.CharField(blank=True, max_length=200, null=True, verbose_name='Native Name')),
                ('slug', models.SlugField(max_length=5, verbose_name='Code')),
            ],
        ),
        migrations.AddField(
            model_name='task',
            name='tile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tile.Tile'),
        ),
    ]
