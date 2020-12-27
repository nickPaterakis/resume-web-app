package com.nicholaspaterakis.emailsender.service;

import com.nicholaspaterakis.emailsender.model.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender emailSender;

    @Override
    public void sendSimpleMessage(Email email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(email.getEmail());
        message.setTo("*******");
        message.setSubject(email.getName() + " " +  email.getEmail());
        message.setText(email.getMessage());
        emailSender.send(message);
    }

}