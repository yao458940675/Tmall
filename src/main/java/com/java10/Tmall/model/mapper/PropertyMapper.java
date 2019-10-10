package com.java10.Tmall.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Property;
@Mapper
public interface PropertyMapper {
	public Property selectProperty();
}
