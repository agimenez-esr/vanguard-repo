public class ContactControllerForce {
    public List<Contact> contacts { get; set; }
    
    public ContactControllerForce() {
        contacts = [SELECT Id, Name, Email, Phone FROM Contact];
    }
    
}
