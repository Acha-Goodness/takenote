import { Text, TextInput, View, TouchableOpacity, ActivityIndicator} from "react-native";

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
                      type={"text"}
                      value={value}
                      required
                      onChangeText={ text => setFormData({
                        ...formData,
                        [getControlItem.name] : text
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
                      type={"text"}
                      value={value}
                      required
                      multiline
                      style={{
                        backgroundColor:"#ffffff",
                        borderRadius:5,
                        width:"100%",
                        padding: 12,
                        minHeight: 120,
                        textAlignVertical: 'top', // IMPORTANT for Android
                      }}
                      onChangeText={ text => setFormData({
                        ...formData,
                        [getControlItem.name] : text
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
                      type={"text"}
                      value={value}
                      required
                      onChangeText={ text => setFormData({
                        ...formData,
                        [getControlItem.name] : text
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
        onPress={onSubmit}
        style={{
          marginTop:"5%", 
          width:"100%",
          backgroundColor:"#2ec6dd",
          paddingVertical:"3%",
          borderRadius:5
        }}>
          {isLoading 
            ? <ActivityIndicator size="small" color="#ffffff"/> 
            : <Text style={{alignSelf:"center", color:"#ffffff"}}>{buttonText || "Submit"}</Text>
          }
      </TouchableOpacity>
    </>
  )
}

export default CommonForm;
