function Node(ele){
    this.ele=ele
    this.next=null
}
function List(){
    this.head=new Node('head')
}
List.prototype={
    find:function (item) {
        let currentNode=this.head
        while(currentNode.ele!=item){
            currentNode=currentNode.next
        }
        return currentNode;
    },
    insert:function (newEle,item) {
        let newNode=new Node(newEle)
        let current=this.find(item)
        newNode.next=current.next
        current.next=newNode;
    },
    findPrevious:function (item) {
        let currentNode=this.head
        while(!(currentNode.next===null)&&(currentNode.next.ele!==item)){
            currentNode=currentNode.next
        }
        return currentNode
    },
    remove:function (item) {
        let preNode=this.findPrevious(item)
        if(!(prevNode.next===null)){
            prevNode.next=prevNode.next.next;
        }
    },
    edit:function (item,newItem) {
        let ele=this.find(item)
        ele.ele=newItem;
    },
    display:function () {
        var currNode=this.head
        while(!(currNode.next===null)){
            console.log(currNode.next.ele)
            currNode=currNode.next
        }
    }
}
var names=new List();
names.insert('weiqiiujuan','liuxiaotian')
names.display();