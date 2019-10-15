package com.java10.Tmall.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Property;
import com.java10.Tmall.model.bean.PropertyValue;
@Mapper
public interface PropertyMapper {
	public Property selectProperty();
	public List<Property> getPropertyByCategory(Map<String,Object> map);
	public int getRecords(int cid);
	public void savePropertyById(String name, int cid);
	public int selectPropertyByIdName(String name, int cid);
	public void deletePropertyById(int id);
	public Property selectPropertyName(int id);
	public void updatePropertyById(String name, int id);	
	public List<Property> getPropertiesById(Map<String,Object> map);
	public void updataPropertieById(PropertyValue pv);
	
}
