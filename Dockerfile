FROM debian:9.8-slim

LABEL "version"="1.0.0"
LABEL "repository"="https://github.com/joelwmale/webhook-action"
LABEL "homepage"="https://github.com/joelwmale/webhook-action"
LABEL "maintainer"="Joel Male <joel@joelmale.com>"
LABEL "com.github.actions.name"="Webhook Action"
LABEL "com.github.actions.description"="Posts data to an endpoint on any event"
LABEL "com.github.actions.icon"="message-square"
LABEL "com.github.actions.color"="gray-dark"

# Install curl
RUN apt-get update && apt-get install -y curl

# Add the entry point
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Load the entry point
ENTRYPOINT ["/entrypoint.sh"]