package com.java10.Tmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.java10.Tmall.model.bean.Order_;
import com.java10.Tmall.model.service.OrderService;

@Controller
public class OrderController {

	
	@Autowired
	private OrderService orderService;
	@RequestMapping("selectAllOrder")
	@ResponseBody
	public List<Order_> selectAllOrder(){
		return orderService.selectAllOrder();
	}
	@RequestMapping("updateOrderOstatus/{index}")
	@ResponseBody
	public String updateOrderOstatus(@PathVariable int index){
		orderService.updateOrderOstatus(index);
		return "{\"result\":\"success\"}";
	}
	
}
