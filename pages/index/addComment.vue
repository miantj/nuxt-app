 <template>
  <main>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    >
    </el-input>
  </main>
</template>


<script>
export default {
  data () {
    return {
      input: '',
      textarea2: '',
    }
  }
}
</script>