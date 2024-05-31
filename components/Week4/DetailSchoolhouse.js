import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailSchoolhouse = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={{ uri: 'https://www.buildernews.in.th/wp-content/uploads/2022/05/01-1-1024x576-1.jpg' }} // Replace with the path to your image
        />
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.tags}>
          <View style={styles.tag}><Text style={styles.tagText}>20 min</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Guides & Tips</Text></View>
        </View>
        <Text style={styles.title}>Social Sciences Building Complex 3 or SC3</Text>
        <View style={styles.author}>
          <Image
            style={styles.authorImage}
            source={{ uri: 'https://www.buildernews.in.th/wp-content/uploads/2022/05/01-1-1024x576-1.jpg' }} // Replace with the path to your author image
          />
        </View>
        <Text style={styles.Text}>
        สำหรับอาคาร SC3 หรือ STUDY CENTER 3 สถาปนิกชุมชนและสิ่งแวดล้อม อาศรมศิลป์ อธิบายแนวคิดการออกแบบไว้ว่าเป็นการสะท้อนปรัชญาและแนวคิดการส่งเสริมนวัตกรรมการเรียนรู้แบบ “ครูเพื่อศิษย์” (Teacher for pupils) และเป็นต้นแบบของศูนย์การเรียนรู้ที่สร้างแรงบันดาลใจ เปิดจินตนาการและความคิดสร้างสรรค์ รวมไปถึงเชาวน์ปัญญาและจิตสำนึกที่จะเป็นผู้นำแห่งความเปลี่ยนแปลงแบบไร้พรมแดน ด้วยสถานที่ตั้ง ณ แกนกลางของมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต อาคารแห่งนี้จะเป็นชุมชนของแหล่งเรียนรู้ (The Community of Learning Hub) ที่เปิดให้เข้าได้รอบด้านสำหรับการทำกิจกรรมและพบปะเพื่อนฝูง นอกจากนี้ยังเป็นสถาปัตยกรรมที่ส่งเสริมการเรียนรู้แบบสหวิทยาการ (Architecture Encourages Multidisciplinary Learning) ด้วยการออกแบบที่ส่งเสริมปฏิสัมพันธ์แลกเปลี่ยนระหว่างแนวทางต่าง ๆ แต่ก็มีพื้นที่ส่วนตัวด้วย อาคารแห่งนี้ยังเป็นพื้นที่สีเขียวอย่างเห็นได้ชัดด้วยกำแพงและพื้นที่สีเขียวต่าง ๆ ที่สร้างบรรยากาศการเรียนรู้ที่น่ารื่นรมย์
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 250,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 50,
    padding: 10,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 10,
  },
  tagText: {
    fontSize: 12,
    color :"white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  Text: {
    fontSize: 18,
    marginBottom: 15,
  },
  articleBody: {
    fontSize: 16,
    lineHeight: 1.6,
  },
});

export default DetailSchoolhouse;
