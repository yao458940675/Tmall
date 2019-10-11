package com.java10.Tmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@RequestMapping("getRecords/{pagesize}/{cid}")
	@ResponseBody
	public int getRecords(@PathVariable int pagesize,@PathVariable int cid){
		int sum=propertyService.getRecords(cid);
		int num=(sum%pagesize==0)?sum/pagesize:sum/pagesize+1;
		System.out.println("====================="+sum);
		System.out.println("====================="+pagesize);
		System.out.println("====================="+sum%pagesize);
		System.out.println("====================="+sum/pagesize);
		System.out.println("====================="+(sum%pagesize==0));
		System.out.println("====================="+num);
		return num;
	}
	
	@RequestMapping("getPropertyByCategory/{cid}/{pagenum}/{pagesize}")
	@ResponseBody
	public List<Property> getPropertyByCategory(@PathVariable int cid,@PathVariable int pagenum,@PathVariable int pagesize){
		//System.out.println(cid+" "+pagenum+" "+pagesize);
		//System.out.println(propertyService.getPropertyByCategory(cid,pagenum,pagesize));
		return propertyService.getPropertyByCategory(cid,pagenum,pagesize);
	}
	
	
	
}
