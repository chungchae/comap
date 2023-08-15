import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, PRIMARY } from '../../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PostItem = ({ post }) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={[styles.container, { width: windowWidth - 50 }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.name}</Text>
        <View style={styles.explainContainer}>
          <Text style={styles.explain}>{post.date}</Text>
          <Text style={styles.explainSeparator}>|</Text>
          <Text style={styles.explain}>{post.nickname}</Text>
          <Text style={styles.explainSeparator}>|</Text>
          <MaterialCommunityIcons
            style={[styles.icon, { color: '#991b1b' }]}
            name={'cards-heart-outline'}
            size={18}
            color={GRAY.DARK}
          />
          <Text style={[styles.explain, { color: '#991b1b' }]}>
            {post.like}
          </Text>
          <MaterialCommunityIcons
            style={[styles.icon, { color: '#075985' }]}
            name={'comment-outline'}
            size={18}
            color={GRAY.DARK}
          />
          <Text style={[styles.explain, { color: '#075985' }]}>
            {post.comment}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/comap.png')}
          style={styles.image}
          // resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

PostItem.propTypes = {
  post: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    marginHorizontal: 20,
    paddingVertical: 10,
    // borderBottomWidth: 0.5,
    // borderBottomColor: GRAY.DARK,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '700',
  },
  content: {
    fontSize: 15,
    lineHeight: 25,
  },
  explainContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  explain: {
    fontSize: 15,
    lineHeight: 20,
    color: PRIMARY.DARK,
  },
  explainSeparator: {
    paddingHorizontal: 5,
    fontSize: 15,
    lineHeight: 20,
    color: PRIMARY.DARK,
  },
  icon: {
    paddingHorizontal: 2,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginLeft: 10,
    width: 80,
    height: 80,
    borderWidth: 1, // 지워
    borderColor: 'black', // 지워
    borderRadius: 10,
  },
});

export default PostItem;