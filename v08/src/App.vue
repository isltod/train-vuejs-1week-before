<script setup>
import axios from 'axios';
import { onMounted, ref, watch, watchEffect } from 'vue';

  const dispHead = ref('')
  const memberList = ref([]);
  const showTable = ref(false)
  const showForm = ref(false)
  const memberName = ref('')
  const memberMail = ref('')
  const memberId = ref('')
  const addOrEdit = ref('')

  const addOrEditMember = async () => {
    try {
      const member = {name: memberName.value, email: memberMail.value}
      if (memberId.value == '') {
        const response = await axios.post(
          "http://localhost:3000/member", member
        )
      } else {
        const response = await axios.put(
          "http://localhost:3000/member/" + memberId.value, member
        )
        memberId.value = ''
      }
      memberName.value = '';
      memberMail.value = "";
      getMembers()
      showForm.value = false;
    } catch(error) {
      dispHead.value.innerText("오류 발생: " + error)
    }
  }

  const getMembers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/member");
      memberList.value = response.data;
      showTable.value = true
    } catch(error) {
      dispHead.value.innerText("오류 발생: " + error)
    }
  }

  const editMember = async (id) => {
    try {
      const response = await axios.get("http://localhost:3000/member/" + id);
      memberId.value = id
      memberName.value = response.data.name
      memberMail.value = response.data.email
      showForm.value = true
    } catch(error) {
      dispHead.value.innerText("오류 발생: " + error)
    }
  }

  const deleteMember = async (id) => {
    try {
      const response = await axios.delete("http://localhost:3000/member/" + id);
      getMembers()
    } catch(error) {
      dispHead.value.innerText("오류 발생: " + error)
    }
  }

  watchEffect(
    () => {
      if (memberId.value == '') {
        addOrEdit.value = "추가"
      } else {
        addOrEdit.value = "수정"
      }
    }
  );
</script>

<template>
  <div>
    <p ref="dispHead"></p>
    <button class="btn btn-primary ms-3 mt-3 mb-3" @click="showForm = true">회원 추가...</button>
    <button class="btn btn-success ms-3 mt-3 mb-3" @click="getMembers">회원 목록 가져오기</button>
    <form v-show="showForm">
      <label class="form-level">이름</label>
      <input type="text" class="form-control" v-model="memberName" />
      <label class="form-level">이메일</label>
      <input type="text" class="form-control" v-model="memberMail" />
      <button type="button" class="btn btn-success ms-3 me-3 mt-3" @click="addOrEditMember">{{ addOrEdit }}</button>
      <button type="button" class="btn btn-secondary mt-3" @click="showForm = false">취소</button>
    </form>
    <div v-show="showTable">
      <table class="table ms-3" >
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in memberList" :key="member.id">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>
            <td>
              <button type="button" class="btn btn-primary me-1" @click="editMember(member.id)">수정</button>
              <button type="button" class="btn btn-danger" @click="deleteMember(member.id)">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
