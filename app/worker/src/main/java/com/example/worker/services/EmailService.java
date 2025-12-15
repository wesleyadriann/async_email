package com.example.worker.services;

import com.example.worker.dto.MessageDto;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    public void sendEmail(MessageDto message) {
        System.out.println("Sending email for: " + message.getData());
        System.out.println(message);
    }
}
