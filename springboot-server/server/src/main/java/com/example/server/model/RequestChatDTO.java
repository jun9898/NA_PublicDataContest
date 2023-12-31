package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class RequestChatDTO {

    private String categoryName;
    private String typeOfConversation;
    private String text;

}
