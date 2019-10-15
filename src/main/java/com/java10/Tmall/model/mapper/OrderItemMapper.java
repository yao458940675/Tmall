package com.java10.Tmall.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.OrderItem;

@Mapper
public interface OrderItemMapper {
	public List<OrderItem> getOrderItems(int oid);
}
