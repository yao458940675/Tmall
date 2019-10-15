package com.java10.Tmall.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.java10.Tmall.model.bean.Order_;

@Mapper
public interface OrderMapper {

	public List<Order_> selectAllOrder();
	
	public void updateOrderOstatus(int index);
}
