package com.example.worker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class MessageDto {
    @JsonProperty("data")
    String data;
}
