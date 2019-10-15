package com.java10.Tmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.java10.Tmall.model.bean.OrderItem;
import com.java10.Tmall.model.service.OrderItemService;

@Controller
public class OrderItemController {
	@Autowired
	private OrderItemService orderItemService;
	
	@RequestMapping("getOrderItems/{oid}")
	@ResponseBody
	public List<OrderItem> getOrderItems(@PathVariable int oid){
		return orderItemService.getOrderItems(oid);
	}
}
