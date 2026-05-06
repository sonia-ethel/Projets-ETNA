FROM gcc:14.2.0 AS builder
WORKDIR /app
COPY . .
RUN gcc main.c -o main
CMD ["./main"]

FROM debian:stable-slim
WORKDIR /app
COPY --from=builder /app/main .
CMD ["./main"]