package com.java10.Tmall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.java10.Tmall.model.bean.Property;
import com.java10.Tmall.model.service.PropertyService;

@Controller
public class PropertyController {
	@Autowired
	private PropertyService  propertyService;

	@RequestMapping("selectProperty")
	@ResponseBody
	public Property selectProperty(){

		return propertyService.selectProperty();
	}
}
