import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonForm from '../../components/common/form';
import { registerFormControls } from '../../config';

const Register = () => {
  return (
    <SafeAreaView style={styles.registerWrap}>
        <View>
        <Text>register</Text>
        </View>
        <CommonForm
            formControls={registerFormControls}
            buttonText={"Sign Up"}
            formData={formData}
            setFormData={setFormData}
            isLoading={isLoading}
            onSubmit={onSubmit}
        />
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
registerWrap: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal:"20%"
  },
})