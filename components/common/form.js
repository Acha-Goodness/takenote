import { Text, TextInput, View, TouchableOpacity } from "react-native";

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText, isLoading, color }) => {

  const renderInputsByComponentType = (getControlItem) => {

    let element = null;
    const value = formData[getControlItem.name] || ""

    switch (getControlItem.componentType){
      case "input":
        element = (
                    <TextInput
                      style={{backgroundColor:"#ffffffff", width:"100%", paddingVertical:"3%", paddingHorizontal:"2%", borderRadius:5}}
                      name={getControlItem.name}
                      placeholder={getControlItem.placeholder}
                      id={getControlItem.name}
                      type={getControlItem.type}
                      value={value}
                      required
                      onChange={ event => setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value
                      })}
                    />
                  );
      break;
      case "textarea":
        element = (
                    <TextInput
                      name={getControlItem.name}
                      placeholder={getControlItem.placeholder}
                      id={getControlItem.name}
                      value={value}
                      required
                      onChange={ event => setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value
                      })}
                    />
                  );
      break;
      default:
        element = (
                    <TextInput
                      name={getControlItem.name}
                      placeholder={getControlItem.placeholder}
                      id={getControlItem.name}
                      type={getControlItem.type}
                      value={value}
                      required
                      onChange={ event => setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value
                      })}
                    />
                  );
      break;
    }
    return element;
  }

  return (
    <>
      <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start", alignItems:"flex-end", width:"100%", gap: 24}}>
        {
          formControls.map((controlItem, index) => 
          <View style={{flexDirection:"row", flexWrap:"wrap", width:"100%", gap:6}} key={index}>
            {renderInputsByComponentType(controlItem)}
          </View>)
        }
      </View>
      <TouchableOpacity 
        style={{
          marginTop:"5%", 
          width:"100%",
          backgroundColor:"#2ec6dd",
          paddingVertical:"3%",
          borderRadius:10
        }}>
         <Text style={{alignSelf:"center", color:"#ffffff"}}>{buttonText || "Submit"}</Text>
      </TouchableOpacity>
    </>
  )
}

export default CommonForm;
