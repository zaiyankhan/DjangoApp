# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function, unicode_literals

from cms.sitemaps import CMSSitemap
from django.conf import settings
from django.conf.urls import include, url
from django.urls import path
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.static import serve
from django.views.generic import TemplateView

admin.autodiscover()



urlpatterns = [
    url(r'^sitemap\.xml$', sitemap,
        {'sitemaps': {'cmspages': CMSSitemap}}),
     path('',TemplateView.as_view(template_name='v8.html'), name="home"),
     path('/software',TemplateView.as_view(template_name='gen.html'), name="software"),
     path('/workshop',TemplateView.as_view(template_name='prices.html'), name="workshop")
]



urlpatterns += i18n_patterns(
    url(r'^admin/', admin.site.urls),  # NOQA
    url(r'^', include('cms.urls')),
    # url(r'~', views.year_archive, name='core')
)

# This is only needed when using runserver.
if settings.DEBUG:
    urlpatterns = [
        url(r'^media/(?P<path>.*)$', serve,
            {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
        ] + staticfiles_urlpatterns() + urlpatterns
