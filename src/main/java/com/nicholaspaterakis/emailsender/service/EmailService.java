package com.nicholaspaterakis.emailsender.service;

import com.nicholaspaterakis.emailsender.model.Email;

public interface EmailService {

    public void sendSimpleMessage(Email email);
}
