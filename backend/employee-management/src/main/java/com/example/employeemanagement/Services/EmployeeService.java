package com.example.employeemanagement.Services;

import com.example.employeemanagement.Model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();
}
