package com.nicholaspaterakis.emailsender.controller;


import com.nicholaspaterakis.emailsender.model.Email;
import com.nicholaspaterakis.emailsender.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

    private EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping(path = "/send-email")
    public void sendEmail(@RequestBody Email email) {
        emailService.sendSimpleMessage(email);
    }
}
