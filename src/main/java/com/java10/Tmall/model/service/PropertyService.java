package com.java10.Tmall.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.java10.Tmall.model.bean.Property;
import com.java10.Tmall.model.bean.PropertyValue;
import com.java10.Tmall.model.mapper.PropertyMapper;

@Service
public class PropertyService {
	@Autowired
	private PropertyMapper propertyMapper;
	public Property selectProperty(){
		return propertyMapper.selectProperty();
	}
	
	public List<Property> getPropertyByCategory(int cid,int pagenum,int pagesize){
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("k_cid", cid);
		map.put("k_index", (pagenum-1)*pagesize);
		map.put("k_pagesize", pagesize);
		
		return propertyMapper.getPropertyByCategory(map);
	}

	public int getRecords(int cid) {
		// TODO Auto-generated method stub
		return propertyMapper.getRecords(cid);
	}
	
	@Transactional
	public void savePropertyById(String name, int cid) {
		// TODO Auto-generated method stub
		propertyMapper.savePropertyById(name, cid);
	}

	public int selectPropertyByIdName(String name, int cid) {
		// TODO Auto-generated method stub
		return propertyMapper.selectPropertyByIdName(name,cid);
	}

	public void deletePropertyById(int id) {
		// TODO Auto-generated method stub
		propertyMapper.deletePropertyById(id);
	}
	
	public Property selectPropertyName(int id) {
		// TODO Auto-generated method stub
		return propertyMapper.selectPropertyName(id);
	}
	
	public void updatePropertyById(String name, int id) {
		// TODO Auto-generated method stub
		propertyMapper.updatePropertyById(name,id);
	}
	
	
	
	public List<Property> getPropertiesById( int id){
		return propertyMapper.getPropertiesById(id);
	}
	public void updataPropertieById(String value,int id){
		PropertyValue pv=new PropertyValue();
		pv.setId(id);
		pv.setValue(value);
		propertyMapper.updataPropertieById(pv);
	}



	
}
