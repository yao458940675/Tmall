package com.java10.Tmall.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java10.Tmall.model.bean.Property;
import com.java10.Tmall.model.mapper.PropertyMapper;

@Service
public class PropertyService {
	@Autowired
	private PropertyMapper propertyMapper;
	public Property selectProperty(){
		return propertyMapper.selectProperty();
	}
}
