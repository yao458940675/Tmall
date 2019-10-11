package com.java10.Tmall.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
}
