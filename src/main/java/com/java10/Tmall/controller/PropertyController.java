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
//		System.out.println("====================="+sum);
//		System.out.println("====================="+pagesize);
//		System.out.println("====================="+sum%pagesize);
//		System.out.println("====================="+sum/pagesize);
//		System.out.println("====================="+(sum%pagesize==0));
//		System.out.println("====================="+num);
		return num;
	}
	
	@RequestMapping("getPropertyByCategory/{cid}/{pagenum}/{pagesize}")
	@ResponseBody
	public List<Property> getPropertyByCategory(@PathVariable int cid,@PathVariable int pagenum,@PathVariable int pagesize){
		//System.out.println(cid+" "+pagenum+" "+pagesize);
		//System.out.println(propertyService.getPropertyByCategory(cid,pagenum,pagesize));
		return propertyService.getPropertyByCategory(cid,pagenum,pagesize);
	}
	
	@RequestMapping("selectPropertyByIdName/{name}/{cid}")
	@ResponseBody
	public int selectPropertyByIdName(@PathVariable String name,@PathVariable int cid){
		return propertyService.selectPropertyByIdName(name,cid);
	}
	
	@RequestMapping("savePropertyById/{name}/{cid}")
	@ResponseBody
	public String savePropertyById(@PathVariable String name,@PathVariable int cid){
		propertyService.savePropertyById(name,cid);
		return "{\"result\":\"增加成功\"}";
	}
	
	@RequestMapping("deletePropertyById/{id}")
	@ResponseBody
	public String deletePropertyById(@PathVariable int id){
		propertyService.deletePropertyById(id);
		return "{\"result\":\"删除成功\"}";
	}
	
	@RequestMapping("getPropertiesById/{id}")
	@ResponseBody
	public List<Property> getPropertiesById(@PathVariable int id){
		
		return propertyService.getPropertiesById(id);
		
	}
	@RequestMapping("updataPropertieById/{value}/{id}")
	@ResponseBody
	public String updataPropertieById(@PathVariable String value,@PathVariable int id){
		System.out.print("已进入controller");
		propertyService.updataPropertieById(value, id);
		return "{\"data\":\"success\"}";
	}
	
	
	
}
