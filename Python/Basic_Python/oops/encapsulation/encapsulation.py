'''
What is Encapsulation? 🤔

Encapsulation means:

Binding data (variables) and methods together
and controlling access to that data.

In simple words:
👉 Data is hidden
👉 Access is given through methods

'''


class Order:
    def __init__(self,customer_name,items,total_amount,discount):
        self.customer_name = customer_name
        self.items = items
        self.__total_amount = total_amount
        self.__discount = discount

    def __calculate_final(self):
        return self.__total_amount - self.__discount
    
    def _get_admin_view(self):
        return {
            "Customer":self.customer_name,
            "Items":self.items,
            "Total Amount":self.__total_amount,
            "Discount Applied":self.__discount,
            "Final Bill":f"${self.__calculate_final()}"
        }
    
    def get_customer_view(self):
        return{
            "Customer":self.customer_name,
            "Items":self.items,
            "Final Bill":f"$ {self.__calculate_final()}"
        }
    
class AdminPortal:
    def show_order(self,order):
        return order._get_admin_view()
    

class CustomerPortal:
    def show_order(self,order):
        return order.get_customer_view()
    
order = Order("Shankar",["Pizza","Pepsi"],600,150)

admin = AdminPortal()
customer= CustomerPortal()

print(admin.show_order(order))
print("\n")
print(customer.show_order(order))