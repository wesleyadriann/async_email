package com.example.worker.components;

import com.example.worker.dto.MessageDto;

import com.example.worker.services.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageReceiver {

    @Autowired
    EmailService emailService;

    @RabbitListener(queues = "${rabbit.queue_name}")
    public void processQueue(MessageDto content) {
        this.emailService.sendEmail(content);
    }
}
