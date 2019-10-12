package com.java10.Tmall.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java10.Tmall.model.bean.Order_;
import com.java10.Tmall.model.mapper.OrderMapper;

@Service
public class OrderService {

	@Autowired
	private OrderMapper orderMapper;
	
	public List<Order_> selectAllOrder(){
		return orderMapper.selectAllOrder();
	}
}
