FROM harbor.wh.ctrm/image/nginx:dcp3

COPY --chown=app:app dist/* /home/app/static/

RUN chown -R root:root /home/app/static /etc/nginx && \
    chmod a-w -R /home/app/static /etc/nginx

USER app
