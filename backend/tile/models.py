# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Tile(models.Model):
    STATUS_PENDING = "pending"
    TILE_STATUS_CHOICES = (("pending", _("Pending")),
                           ("live", _("Live")),
                           ("archived", _("Archived")))
    launch = models.DateField(_('Launch'),)
    status = models.CharField(_("Status"), default=STATUS_PENDING, max_length=200, choices=TILE_STATUS_CHOICES)

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ("launch",)


class Task(models.Model):
    title = models.CharField(_('Title'), max_length=200)
    type = models.CharField(_('Type'), max_length=200)
    body = models.TextField(_('Body'))
    order = models.SmallIntegerField(default=0)
    tile = models.ForeignKey(Tile)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ("order",)

