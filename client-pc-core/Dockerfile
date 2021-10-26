FROM harbor.wh.ctrm/image/nginx:ubuntu

COPY --chown=app:app nginx-default.conf /etc/nginx/conf.d/default.conf

COPY --chown=app:app dist/* /home/app/static/core/

RUN chown -R root:root /home/app/static /etc/nginx && \
    chmod a-w -R /home/app/static /etc/nginx

USER app
