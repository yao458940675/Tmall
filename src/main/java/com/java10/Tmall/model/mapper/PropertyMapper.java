package com.java10.Tmall.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Property;
@Mapper
public interface PropertyMapper {
	public Property selectProperty();
	public List<Property> getPropertyByCategory(Map<String,Object> map);
	public int getRecords(int cid);
}
