package com.example.server.model;


import com.example.server.entity.User;
import com.example.server.entity.UserCase;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseUserDTO {

	private Long userId;

	private UserCase userCase;
}
