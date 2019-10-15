package com.java10.Tmall.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java10.Tmall.model.bean.OrderItem;
import com.java10.Tmall.model.mapper.OrderItemMapper;

@Service
public class OrderItemService {
	@Autowired
	private OrderItemMapper orderItemMapper;
	public List<OrderItem> getOrderItems(int oid){
		return orderItemMapper.getOrderItems(oid);
	}
}
